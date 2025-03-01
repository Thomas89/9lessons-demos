/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "bg",
		api: {
			wikipedia: "bg"
		},
		date: {
			month: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
			month_abbr: ["Ян.", "Фев.", "Март", "Апр.", "Май", "Юни", "Юли", "Авг.", "Септ.", "Окт.", "Ноем.", "Дек."],
			day: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
			day_abbr: ["Нед.", "Пон.", "Вт.", "Ср.", "Четв.", "Пет.", "Съб."]
		},
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'d mmmm yyyy'</small>'",
			full_long: "d mmm yyyy 'at' h:MM TT",
			full_long_small_date: "h:MM TT'<br/><small>d mmm yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Зареждане... ",
			return_to_title: "В началото",
			expand_timeline: "Разширяване",
			contract_timeline: "Свиване",
			wikipedia: "От Уикипедия, свободната енциклопедия",
			loading_content: "Съдържанието се зарежда",
			loading: "Зарежда се"
		}
	}
}