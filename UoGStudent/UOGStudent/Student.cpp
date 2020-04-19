#include "pch.h"
#include "Student.h"


Student::Student()
{
}

Student::Student(const int &id, const string &name)
{
	this->id = id;
	this->name = name;
}

void Student::display()
{
	cout << "Student id: " << id << endl;
	cout << "Student name: " << name << endl;
}

Student::~Student()
{}

PreStudent::PreStudent()
{}

PreStudent::PreStudent(const int &id, const string &name)
{
	this->id = id;
	this->name = name;
}

void PreStudent::test()
{
	cout << "Do english exam" << endl;
	cout << "Enter grade (1-10): " << endl;
	cin >> englishGrade;
}

void PreStudent::display()
{
	Student::display();  //Print id and name
	cout << "English exam: " << englishGrade << endl;
	if (englishGrade < 5) cout << "Not qualified" << endl;

}

void ITStudent::test()
{
	cout << "Submit assignments" << endl;
	cout << "Enter grade (F/P/M/D): ";
	cin >> grade;
}

void ITStudent::display()
{
	Student::display();
	cout << "Grade: " << grade << endl;
	if (grade == "Fail") cout << "Cannot go to Topup" << endl;
}
