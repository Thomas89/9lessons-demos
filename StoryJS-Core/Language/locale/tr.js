/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "tr",
		api: {
			wikipedia: "tr"
		},
		date: {
			month: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
			month_abbr: ["Oca.", "Şub.", "Mar.", "Nis.", "May.", "Haz.", "Tem.", "Ağu.", "Eyl.", "Eki.", "Kas.", "Ara."],
			day: ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
			day_abbr: ["Paz.","Pzt.", "Sal.", "Çar.", "Per.", "Cum.", "Cts."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm',' yyyy",
			time_no_seconds_short: "H:MM",
			time_no_seconds_small_date: "H:MM'<br/><small>'d mmmm',' yyyy'</small>'",
			full_long: "d mmm',' yyyy 'at' H:MM",
			full_long_small_date: "H:MM '<br/><small>d mmm',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Zaman Çizelgesi Yükleniyor... ",
			return_to_title: "Başlığa Dön",
			expand_timeline: "Zaman Çizelgesini Genişlet",
			contract_timeline: "Zaman Çizelgesini Daralt",
			wikipedia: "Wikipedia'dan, özgür ansiklopedi",
			loading_content: "İçerik Yükleniyor",
			loading: "Yükleniyor"
		}
	}
}