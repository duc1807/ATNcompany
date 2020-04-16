// DemoSingleton.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include "Drive.h"
#include "WindowManager.h"
#include "WindowExplorer.h"
#include "CommandPrompt.h"

int main()
{
	/*
	Drive c("C");
	c.addDirectory("Windows");
	c.addDirectory("Program Files");
	c.addDirectory("Documents");

	c.print();
	*/

	//WindowManager manager; //khong khoi tao duoc, phai dung con tro
	
	
	////////
	
	/*
	WindowManager *manager = WindowManager::getManager();

	manager->addDirectory("C", "Window");
	manager->addDirectory("C", "Program Files");

	manager->addDirectory("D", "Working");

	manager->print("C");
	manager->print("D");
	*/

	WindowExplorer windows1("C");
	windows1.addDirectory("Windows");
	windows1.addDirectory("Program Files");
	windows1.addDirectory("Documents");

	windows1.print();

	cout << "Change to D:\\" << endl;
	windows1.changeDrive("D");
	windows1.print();
	

	windows1.addDirectory("Movies");
	windows1.addDirectory("Music");

	WindowExplorer windows2("D");
	windows2.print();
	windows2.addDirectory("Movies");
	windows2.print();



	WindowExplorer windows3("F");

	CommandPrompt("D");

	windows1.changeDrive("C");
	windows1.print();
	windows2.print();
	

	



	return 0;
}

