#pragma once

#include <iostream>
#include <string>
#include <vector>
#include "Drive.h"
using namespace std;

class WindowManager
{
private:
	static WindowManager *manager;
	vector<Drive> drives;
	vector<Drive> allDrives;

	WindowManager(); //private constructor
public:
	static WindowManager* getManager();
	void print(const string &drive);
	void addDirectory(const string &drive, const string &dir);
	static void closeManager();
	vector<Drive> getAllDrives();
	void partition(vector<string> drives);
};

