/**
 * Feedback v1.0
 *
 * Copyright (C) 2014 Erwin Bujak
 * http://lab.erwinbujak.eu/Feedback/
 */
	var FeedbackLanguage = {
		global: {
			close: "Close",
			toolsMin: "Tools minimized"
		},
		buttonInit: {
			name: "Feedback",
			title: ""
		},
		validate: {
			category: "You must select at least one category.",
			textarea: "You must complete a description of the notification."
		},
		message: {
			success: "Notification has been sent.<br>Thank you!",
			error: "The notification has not been sent.<br>Tell us about it by e-mail: email@example.com"
		},
		step: [
			{
				text: "Feedback allows you to report problems that relate to our website. We also encourage you to submit general comments and ideas.<br><br>Select a category and briefly describe a notification.",
				buttonScreenshot: "Mark described parts of the page",
				buttonAdd: "Add notification"
			},
			{
				text: "For a moment it will generate a screenshot so that you can select are described elements of the page."
			},
			{
				text: "We generated for you screenshot, select the items described at the beginning.<br><br>Available tools:",
				buttonAdd: "Add notification"
			},
			{
				text: "Sending notification.<br>Please wait ..."
			}
		],
		tools: {
			select: {
				name: "Mark",
				description: "Mark described the area of ​​the page"
			},
			blackout: {
				name: "Erase",
				description: "Hide all personal information"
			},
			rubber: {
				name: "Delete",
				description: "Delete the selected area"
			}
		}
	};