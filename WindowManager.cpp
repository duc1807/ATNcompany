#include "pch.h"
#include "WindowManager.h"
#include "Drive.h"

WindowManager *WindowManager::manager = 0;

WindowManager::WindowManager()
{
	Drive c("C");
	Drive d("D");
	drives.push_back(c);
	drives.push_back(d);
}

WindowManager* WindowManager::getManager()
{
	if (manager == 0) // instance has not been created
	{
		manager = new WindowManager();
	}
	return manager;
}

void WindowManager::print(const string &drive)
{
	int count = 0;
	for (int e = 0; e < drives.size(); e++)
	{
		if (drive == drives[e].getName())
			for (int i = 0; i < drives.size(); i++)
			{
				if (drive == drives[i].getName())
				{
					drives[i].print();
				}
			}
		else
		{
			count++;
		}
	}
	if (count-1 == drives.size()) cout << "This drive is not existed!" << endl;
}

void WindowManager::addDirectory(const string &drive, const string &dir)
{
	for (int i = 0; i < drives.size(); i++)
	{
		if (drive == drives[i].getName())
		{
			drives[i].addDirectory(dir);
			break;
		}
	}
}

void WindowManager::closeManager()
{
	if (manager != 0)
	{
		delete manager;
		manager = 0;
	}
	
}
vector<Drive> WindowManager::getAllDrives()
{
	for (int i = 0; i < drives.size(); i++)
	{
		Drive ft = drives[i];
		allDrives.push_back(ft);
	}
	return allDrives;
}
