# Generated by Django 5.0.2 on 2024-03-27 04:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('med', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='medicine',
            name='description',
        ),
        migrations.RemoveField(
            model_name='medicine',
            name='name',
        ),
        migrations.RemoveField(
            model_name='medicine',
            name='price',
        ),
        migrations.RemoveField(
            model_name='medicine',
            name='quantity',
        ),
        migrations.AddField(
            model_name='medicine',
            name='email',
            field=models.CharField(default='example@example.com', max_length=100, validators=[django.core.validators.EmailValidator()]),
        ),
        migrations.AddField(
            model_name='medicine',
            name='password',
            field=models.CharField(default='', max_length=128),
        ),
    ]