from django.db import models

class ProjectManager(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name

class Employees(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Employees"

class Project(models.Model):
    STATUS_CHOICES = [
        ('', 'None'),
        ('Open', 'Open'),
        ('In progress', 'In progress'),
        ('Completed', 'Completed'),
    ]
    
    name = models.CharField(max_length=200)
    projectmanager = models.ForeignKey(ProjectManager, on_delete=models.CASCADE)
    employees = models.ManyToManyField(Employees, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    comments = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='')
    
    def __str__(self):
        return self.name