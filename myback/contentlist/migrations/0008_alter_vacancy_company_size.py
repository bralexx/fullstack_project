# Generated by Django 4.1.4 on 2022-12-18 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contentlist", "0007_alter_vacancy_estimated_salary_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="vacancy",
            name="company_size",
            field=models.CharField(max_length=30, null=True, verbose_name="Size"),
        ),
    ]
