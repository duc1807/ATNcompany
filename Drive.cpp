#include "pch.h"
#include "Drive.h"


Drive::Drive(const string &name)
{
	this->name = name;
}

void Drive::addDirectory(const string &dir)
{
	int i; int count = 0;
	for (i = 0; i < directories.size(); i++)
	{
		if (dir == directories[i])
		{
			cout << "Directory " << dir << " has been created before!" << endl;
			i = directories[i].size();
			count = 5;
		}
	}
	if (count != 5) directories.push_back(dir);
	
}

void Drive::print() const
{
	cout << name << ":\\" << endl;
	for (int i = 0; i < directories.size(); i++)
	{
		cout << "\t - " << directories[i] << endl;
	}
	cout << endl;
}

string Drive::getName() const
{
	return name;
}
