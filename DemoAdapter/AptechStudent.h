#pragma once
#include<iostream>
#include <string>
using namespace std;

class AptechStudent
{
protected:
	string name;
	int grade;
public:
	AptechStudent() {};
	AptechStudent(const string &name, const int &grade);
	int getGrade() const;
	string getName() const { return name };

};

