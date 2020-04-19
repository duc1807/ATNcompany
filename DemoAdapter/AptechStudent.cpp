#include "pch.h"
#include "AptechStudent.h"
#include<iostream>
#include <string>

AptechStudent::AptechStudent(const string &name, const int &grade)
{
	this->name = name;
	this->grade = grade;
}

int AptechStudent::getGrade() const
{
	return grade;
}


AptechStudent::~AptechStudent()
{
}
