#pragma once
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Drive
{
private: 
	string name;
	vector<string> directories;
public:
	Drive(const string &name);
	void addDirectory(const string &dir);
	void print() const;
	string getName() const;
};

