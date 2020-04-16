#include "pch.h"
#include "WindowExplorer.h"
#include "Drive.h"


WindowExplorer::WindowExplorer(const string &drive)
{
	manager = WindowManager::getManager(); //static method is called via class name
	check = manager->getAllDrives();
	int count = 0;
	int i = 0;
	while (i < check.size())
	{
		if (drive == check[i].getName())
		{
			this->currentDrive = drive;
			i = check.size();
			count = 5;
		}
		else i++;
	}
	if (count != 5) cout << "Can not find the drive " << drive << endl;
}

void WindowExplorer::changeDrive(const string &drive)
{
	this->currentDrive = drive;
}


void WindowExplorer::addDirectory(const string &dir)
{
	manager->addDirectory(currentDrive, dir);
}

void WindowExplorer::print()
{
	manager->print(currentDrive);
}
