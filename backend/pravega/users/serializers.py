from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Content


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'title', 'description', 'content_type', 'text_content', 'video_url', 'created_at', 'updated_at']

    def validate(self, data):
        """
        Custom validation to ensure correct fields are provided based on content_type.
        """
        content_type = data.get('content_type')
        text_content = data.get('text_content')
        video_url = data.get('video_url')

        if content_type == 'text' and not text_content:
            raise serializers.ValidationError("Text content cannot be empty for content type 'Text'.")

        if content_type == 'video' and not video_url:
            raise serializers.ValidationError("Video URL cannot be empty for content type 'Video'.")

        if content_type == 'both' and (not text_content or not video_url):
            raise serializers.ValidationError("Both text content and video URL must be provided for content type 'Both'.")

        return data
