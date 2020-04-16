#include "pch.h"
#include "CommandPrompt.h"
#include "WindowManager.h"
#include "Drive.h"

CommandPrompt::CommandPrompt(const string &drive)
{
	string wdrive;
	string dir;
	string choice;
	this->drive = drive;
	manager = WindowManager::getManager();
	choice = "okok";
	while (choice != "end")
	{
		cout << drive << ":/";
		cin >> choice;
		
		if (choice == "create")
		{
			cout << drive << ":/" << choice << ">";
			cin >> dir;
			manager->addDirectory(drive, dir);
		}
		else if (choice == "list")
		{
			manager->print(drive);
		}
		else if (choice == "changedrive")
		{
			cout << drive << ":/" << choice << ">";
			cin >> wdrive;
			CommandPrompt(this->drive = wdrive);
		}
	}
	
}

void CommandPrompt::create(string dir)
{

}
