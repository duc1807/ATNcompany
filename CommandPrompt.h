#pragma once
#include <iostream>
#include <string>
#include <vector>
#include "WindowManager.h"
#include "Drive.h"
using namespace std;

class CommandPrompt
{
private:
	WindowManager *manager;
	string drive;
public:
	CommandPrompt(const string &drive);
	void create(string dir);
	void list() const;
	void changeDrive(const string &drive);
	
};

