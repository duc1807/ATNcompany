#pragma once
#ifndef Student_hpp
#define Student_hpp

#include <iostream>
#include<string>

using namespace std;

class Student
{
protected:
	int id;
	string name;
public:
	Student();
	Student(const int &id, const string &name);
	virtual void test() = 0;
	virtual void display();
	virtual ~Student();
};
	
class PreStudent : public Student
{
private:
	int englishGrade;
public:
	PreStudent();
	PreStudent(const int &id, const string &name);
	void test();		//Override
	void display();		//Override
};

class ITStudent : public Student
{
private:
	string grade;
public:
	ITStudent() : Student() {}
	ITStudent(const int &id, const string &name) : Student(id, name) {}
	void test();
	void display();
};




#endif // !Student_hpp


