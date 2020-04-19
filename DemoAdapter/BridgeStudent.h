#pragma once
#include<iostream>
#include <string>
#include "AptechStudent.h"
#include "FGWStudent.h"

using namespace std;

class BridgeStudent : public FGWStudent
{
private:
	AptechStudent aptStd;
public:
	BridgeStudent(const AptechStudent &student);
	//override geName() from FGWStudent
	string getName() const;
	//override getGrade() from FGWStudent
	string getGrade() const;
	
};

