#include "pch.h"
#include "BridgeStudent.h"


BridgeStudent::BridgeStudent(const AptechStudent &student)
{
	this->aptStd = student;
}


string BridgeStudent::getName() const
{
	return aptStd.getName();
}

string BridgeStudent::getGrade() const
{
	int grade = aptStd.getGrade();
	if (grade >= 80) return "Distinction";
	else if (grade >= 65) return "Merit";
	else if (grade <= 40) return "Pass";
	else return "Failed"
}
