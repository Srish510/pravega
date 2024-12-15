from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

# Custom Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

# Custom User Model
class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser


from django.db import models

class Content(models.Model):
    CONTENT_TYPES = (
        ('text', 'Text'),
        ('video', 'Video'),
        ('both', 'Text and Video'),
    )

    title = models.CharField(max_length=255, help_text="Title of the content")
    description = models.TextField(blank=True, null=True, help_text="Brief description of the content")
    content_type = models.CharField(max_length=10, choices=CONTENT_TYPES, default='text', help_text="Type of content")
    
    # Text Content
    text_content = models.TextField(blank=True, null=True, help_text="Text-based content")

    # Video Content
    video_url = models.URLField(blank=True, null=True, help_text="URL to video content (e.g., YouTube link)")

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def clean(self):
        """
        Custom validation to ensure proper content is provided based on content_type.
        """
        from django.core.exceptions import ValidationError

        if self.content_type == 'text' and not self.text_content:
            raise ValidationError("Text content cannot be empty for content type 'Text'.")

        if self.content_type == 'video' and not self.video_url:
            raise ValidationError("Video URL cannot be empty for content type 'Video'.")

        if self.content_type == 'both' and (not self.text_content or not self.video_url):
            raise ValidationError("Both text content and video URL must be provided for content type 'Both'.")

    class Meta:
        verbose_name = "Content"
        verbose_name_plural = "Contents"


