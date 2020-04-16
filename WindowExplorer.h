#pragma once
#include <iostream>
#include <string>
#include <vector>
#include "WindowManager.h"
#include "Drive.h"
using namespace std;

class WindowExplorer
{
private:
	WindowManager *manager;
	string currentDrive;
	vector<Drive> check;
public:
	WindowExplorer(const string &dir);
	void changeDrive(const string &dir);
	void addDirectory(const string &dir);
	void print();
};

