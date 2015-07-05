/**
 * Feedback v1.0
 *
 * Copyright (C) 2014 Erwin Bujak
 * http://lab.erwinbujak.eu/Feedback/
 */
	var FeedbackLanguage = {
		global: {
			close: "Zamknij",
			toolsMin: "Narzędzia zminimalizowane"
		},
		buttonInit: {
			name: "Prześlij opinię",
			title: ""
		},
		validate: {
			category: "Musisz wybrać co najmniej jedną kategorię.",
			textarea: "Musisz uzupełnić opis zgłoszenia."
		},
		message: {
			success: "Zgłoszenie zostało wysłane.<br>Dziękujemy!",
			error: "Zgłoszenie nie zostało wysłane.<br>Powiadom nas o tym mailowo: email@example.com"
		},
		step: [
			{
				text: "Feedback umożliwia zgłaszanie problemów, które dotyczą naszej strony. Zachęcamy również do zgłaszania ogólnych komentarzy i pomysłów.<br><br>Wybierz kategorię i opisz krótko czego dotyczy zgłoszenie.",
				textareaPlaceholder: "Napisz kilka słów...",
				buttonScreenshot: "Zaznacz opisane fragmenty strony",
				buttonAdd: "Dodaj zgłoszenie"
			},
			{
				text: "Za chwilę zostanie wygenerowany zrzut ekranu, aby można było zaznaczyć opisane elementy strony."
			},
			{
				text: "Wygenerowaliśmy dla Ciebie zrzut ekranu, zaznacz elementy opisane na początku.<br><br>Dostępne narzędzia:",
				buttonAdd: "Dodaj zgłoszenie"
			},
			{
				text: "Trwa wysyłanie zgłoszenia.<br>Proszę czekać..."
			}
		],
		tools: {
			select: {
				name: "Zaznacz",
				description: "Zaznacz opisany obszar strony"
			},
			blackout: {
				name: "Zmaż",
				description: "Ukryj wszystkie informacje personalne"
			},
			rubber: {
				name: "Usuń",
				description: "Usuń zaznaczony obszar"
			}
		}
	};