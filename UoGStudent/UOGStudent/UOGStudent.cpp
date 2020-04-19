
#include "pch.h"
#include <iostream>
#include "Student.h"

int main()
{
	/*
	Student *s = new PreStudent();
	s->test();
	s->display();

	delete s;
	*/
	Student *s[2];

	for (int i = 0; i < 2; i++)
	{
		int type, id;
		string name;

		cout << "Choose type of student (1-Pre, 2-IT): ";
		cin >> type;

		cout << "Enter id: ";
		cin >> id;

		cout << "Enter name: ";
		cin >> name;

		if (type == 1) s[i] = new PreStudent(id, name);
		else s[i] = new ITStudent(id, name);
		s[i]->test();
	}

	for (int i = 0; i < 2; i++)
	{
		s[i]->display();
		delete s[i];
	}

	return 0;
}

