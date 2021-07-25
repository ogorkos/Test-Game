
let arrQuestions = [
	// write the correct answer in the first place
	// 1
		{question:"מהם הגורמים למחלת הסכרת?", 
		ans1:"הפרעה בפעילות הורמון אינסולין", 
		ans2:"הפרעה בפעילות הורמון טסטוסטרון", 
		ans3:"הפרעה בפעילות הורמון פרוגסטרון", 
		ans4:"הפרעה בפעילות הורמון גלוקגון", 
		why:"אצל חולי הסוכרת קיים חוסר בהורמון האינסולין או פגם בפעילותו , כך שבעת עליית רמת הסוכר בדם אין תגובה הולמת של הפרשת האינסולין מהלבלב, כתוצאה מכך  , מצטבר הגלוקוז בדם , מצב שנקרא היפרגליקמיה"},
	// 2
		{question:"מחלת הסוכרת נגרמת עקב הגורמים הבאים?", 
		ans1:"חוסר בהורמון האינסולין או  עמידות לפעילותו", 
		ans2:"עודף בהורמון האינסולין או עמידות לפעילותו", 
		ans3:"חוסר בהורמון גלוקגון או   עמידות לפעילותו", 
		ans4:"עודף בהורמון גלוקגון או  עמידות לפעילותו", 
		why:
			"אצל חולי הסוכרת קיים חוסר בהורמון האינסולין או פגם בפעילותו , כך שבעת עליית רמת הסוכר בדם אין תגובה הולמת של הפרשת האינסולין מהלבלב, כתוצאה מכך  , מצטבר הגלוקוז בדם , מצב שנקרא היפרגליקמיה"
		},
	// 3
		{question:"כיצד תשמרו על שלמות כף הרגל?", 
		ans1:"למנוע יובש וסדקים בעור  על ידי שימון העור פעמיים ביום ", 
		ans2:"להשאיר את הרגל חבושה כל זמן האשפוז", 
		ans3:"לנעול נעליים מגינות", 
		ans4:"להסיר עור מת ויבש באמצעות מספרים", 
		why:"מניעת  יובש וסדקים בעור  על ידי שימון העור פעמיים ביום תביא לשמירת שלמות העור ותמנע פציעות שעלולות לגרום לזיהום בכף הרגל"
		},
	// 4		
		{question:"כיצד עליך לגזור ציפורניים בכף הרגל הסוכרתית?", 
			ans1:"בצורה ישרה ולא עגולה ע״י פדיקוריסטית רפואית", 
			ans2:"בצורה ישרה ולא עגולה בעצמך", 
			ans3:"בצורה עגולה ולא ישרה ע״י פדיקוריסטית רפואית", 
			ans4:"אין חשיבות לאופן גזירת הציפורניים ", 
			why:"גזירת ציפורניים עגולה עלולה לגרום לציפורן חודרנית  הטיפול ייעשה ע״י אשת מקצוע ע״מ למנוע פציעות מיותרות בכף הרגל הסוכרתית."
		},
	// 5
		{question:"מהם שלושת המרכיבים העיקריים בטיפול בסוכרת?", 
			ans1:"תזונה נכונה, אורח חיים בריא, פעילות גופנית", 
			ans2:"עישון, אכילת ממתקים, פעילות גופנית", 
			ans3:"שינה מרובה, ישיבה ממושכת, אורח חיים בריא", 
			ans4:"טיפול תרופתי, ישיבה ממושכת, תזונה נכונה ", 
			why:"תזונה נכונה מאפשרת איזון של רמת הסוכר בדם, פעילות גופנית ושמירה על אורח חיים בריא ימנעו את סיבוכי המחלה"
		},
	// 6
		{question:"מה תשיג בשמירה על תזונה נכונה?", 
			ans1:"רמות סוכר ושומנים תקינות בדם, ירידה במשקל נכונה, אורח חיים בריא, פעילות גופנית", 
			ans2:"עישון, אכילת ממתקים, פעילות גופניתרמות סוכר ולחץ דם תקינים", 
			ans3:"פיתוח מסת שריר בגוף", 
			ans4:"שיפור הזיכרון והמחשבה המהירה", 
			why:"תזונה נכונה מאפשרת איזון של רמת הסוכר בדם, פעילות גופנית ושמירה על אורח חיים בריא ימנעו את סיבוכי המחלה"
		},
	// 7
		{question:"כיצד תשמור על אורח חיים בריא?", 
			ans1:"הפסקת עישון, תזונה נכונה, הקפדה על נטילת תרופות", 
			ans2:"המשך באורח החיים הנוכחי ללא שינויים", 
			ans3:"המשך עישון, ישיבה ממושכת, אכילת פחמימות בלבד", 
			ans4:"פעילות גופנית בלבד", 
			why:"אורח חיים בריא כולל הפסקת עישון הקפדה על תזונה נכונה ומאוזנת ומעקב אחר רמת הסוכר בדם ונטילת תרופות בזמן"
		},
	// 8
		{question:"כיצד תשמור על היגיינה אישית בכף הרגל?", 
			ans1:"רחצה יומית, יבוש כף הרגל בעיקר בין האצבעות", 
			ans2:"השאר את הרגל חבושה כל זמן האשפוז", 
			ans3:"רחצה יומית במים פושרים בלבד", 
			ans4:"רחצה יומית, וחבישה אטומה מיד לאחר הרחצה", 
			why:"רחצה יומית תשמור על היגיינת כף הרגל ותמנע זיהומים. ייבוש כף הרגל תמנע פטרת בין האצבעות"
		},
	// 9
		{question:"כיצד תמנע מכוויה ופציעה בכף רגל סוכרתית?", 
			ans1:"בדיקת טמפרטורת המים בעזרת גב כף היד", 
			ans2:"רחץ את כף הרגל במים חמים מאוד", 
			ans3:"אין חשיבות לטמפרטורת המים", 
			ans4:"רחץ את כף הרגל במים קרים מאוד", 
			why:"בעזרת גב כף היד ניתן לחוש בטמפרטורה נכונה של המים על מנת לא לחשוף את כף הרגל הסוכרתית למים בטמפרטורה גבוהה מידי שעלולה לגרום לכוויה."
		},
	// 10
		{question:"אלו נעליים מתאימות לשמירת כף רגל סוכרתית?", 
			ans1:"נעליים אורטופדיות מתאימות מעור רך", 
			ans2:"כל נעל סגורה מתאימה", 
			ans3:"נעלי התעמלות גבוהות", 
			ans4:"סנדלים פתוחים", 
			why:"כף הרגל הסוכרתית הינה רגישה ופגיעה מאוד לכן נעל אורתופדית המתאימה לכף הרגל תשמור על שלמות כף הרגל. נעלי עור רך הן ללא תפרים ונוקשות העלולים לגרום ללחץ ופצעים בכף הרגל"
		},
	// 11
		{question:"כיצד תבדוק את כף הרגל לאחר נעילת נעל חדשה?", 
			ans1:"הסר את הנעל כל שעתיים ובדוק נקודות לחץ באצבעות הרגל והעקב", 
			ans2:"הסר את הנעל פעם ביום ובדוק נקודות לחץ באצבעות הרגל והעקב", 
			ans3:"אין חשיבות לבדיקת כף הרגל בנעילת נעל חדשה", 
			ans4:"גש לאחות לבדיקת כף הרגל", 
			why:"בעת נעילת נעל חדשה עלולים להיווצר נקודות לחץ שעלולות להתפתח לפצעים. בכף רגל סוכרתית התחושה ירודה לכן יש לבדוק את בריאות כף הרגל בתדירות גבוהה"
		},
	// 12
		{question:"כיצד תשמור ותטפל בכף רגל סוכרתית?", 
			ans1:"היגיינה אישית, שלמות העור, גזירת ציפורניים נכונה, נעילת נעליים מתאימות", 
			ans2:"אין צורך בבדיקה יומית של כף הרגל", 
			ans3:"אין חשיבות לסוג הנעל", 
			ans4:"נטילת תרופות בזמן", 
			why:"שמירה על כף רגל סוכרתית ע״י הטיפול הנ״ל יימנעו פצעים וזיהומים שעלולים לגרום לסבל רב לחולה ואף להביא לקטיעת גפה"
		},
	// 13
		{question:"מהי מחלת הסוכרת?", 
			ans1:"סוכרת היא מחלה מטבולית המאופיינת בריכוז גבוה של סוכר בדם", 
			ans2:"סוכרת היא מחלה מטבולית המאופיינת בריכוז נמוך של סוכר בדם", 
			ans3:"סוכרת היא מחלה זיהומית המאופיינת בריכוז גבוה של סוכר בדם", 
			ans4:"סוכרת היא מחלה זיהומית המאופיינת בריכוז נמוך של סוכר בדם", 
			why:"הבעיה המרכזית בסוכרת הוא חסר יחסי או מוחלט של הורמון האינסולין המיוצר בבלוטת הלבלב ומאפשר חדירת סוכר מהדם אל תאי הגוף  השונים, שם נדרש הסוכר בכדי להפיק אנרגיה הדרושה לתפקודם התקין"
		},
	// 14
		{question:"במי פוגעת מחלת הסוכרת?", 
			ans1:"סוכרת מסוג 1 פוגעת בילדים ונוער וסוכרת מסוג 2 פוגעת בקרב בני 40 ומעלה", 
			ans2:"בנשים בהריון וילדות בלבד", 
			ans3:"בילדים צעירים ובקשישים בלבד", 
			ans4:"בגברים מעל גיל 50 בלבד", 
			why:"ישנם שני סוגי סוכרת עיקריים: TYPE1 – סוכרת נעורים הפורצת לרוב בגיל הילדות או אצל בני נוער ונובעת מחוסר מוחלט של אינסולין. TYPE 2  עלולה להופיע בכל גיל אך מופיעה בעיקר בבני 40 ומעלה"
		},
	// 15
		{question:"מהם הגורמים למחלת הסוכרת?", 
			ans1:"הסוכרת היא מחלה איטואימונית, גורמים תורשתיים ומחלות נגיפיות מסוימות", 
			ans2:"הסוכרת היא מחלה גנטית הפוגעת בעדות המזרח בלבד", 
			ans3:"הסוכרת נגרמת על ידי מחלות נגיפיות", 
			ans4:"הסוכרת היא מחלה תורשתית בלבד", 
			why:"מערכת חיסון שתוקפת את הלבלב, נטייה תורשתית ומחלות נגיפיות הגורמות לייצור חומרים דלקתיים שעלולים לפגוע בתאי הלבלב ולהרוס אותם ובכך לפגוע בתפקודו"
		},
	// 16
		{question:"מהם סימני הסוכרת?", 
			ans1:"השתנה מרובה, צמא ויובש בפה, חולשה עייפות ורעב, ירידה במשקל, עקצוצים בגפיים", 
			ans2:"עליה במשקל ואדמומיות בעור", 
			ans3:"דיכאון והפרעות נפשיות", 
			ans4:"כאבים עזים בגפיים", 
			why:"השתנה מרובה נובעת כאשר רמת הסוכר בדם עולה, סופח הדם יותר נוזלים וכתוצאה מכך גדלה כמות הנוזלים שמפריד הגוף בשתן. צמא רב ויובש בפה כתוצאה מהשתנה מרובה. חולשה ועייפות נובעות מפגיעה ביכולת הגוף להשתמש בסוכר ליצירת אנרגיה. ירידה במשקל נובעת משימוש הגוף בשכבות השומן שלו במקום בסוכרים שאין ביכולתו לנצל. עקצוצים והפרעות בתחושה נובעים מהנזקים שגורמות רמות הסוכר הגבוהות למערכת העצבים – נוירופתיה סוכרתית."
		},
	// 17
		{question:"מהו הטיפול במחלת הסוכרת?", 
			ans1:"איזון של רמת הסוכר בדם ע״י מעקב, תזונה וטיפול תרופתי", 
			ans2:"טיפול ניתוחי", 
			ans3:"טיפול שמרני ותזונה נכונה", 
			ans4:"טיפול תרופתי בלבד", 
			why:"מילת המפתח בטיפול בסוכרת היא איזון. הוכיחו שאיזון ברמת הסוכר מקטין באופן דרמטי את הסיכון לסיבוכים השונים של המחלה, בייחוד הסיבוכים הנובעים מפגיעה בכלי דם קטנים כמו פגיעה ברשתית בכליות ובעצבים"
		},
	// 18
		{question:"לאילו סיבוכים עלולה לגרום מחלת הסוכרת", 
			ans1:"טרשת עורקים, רטינופתיה, אי ספיקת כליות, פגיעה עצבית, פצעים ברגליים", 
			ans2:"מחלת הסוכרת אינה גורמת סיבוכים", 
			ans3:"פגיעה לבבית בלבד", 
			ans4:"פגיעה בראייה ובכלי הדם בלבד", 
			why:"מחלת סוכרת שאינה מטופלת גורמת לסיבוכים רבים הנובעים מהרס של כלי הדם בגלל הצטברות הגלוקוז בהם. מי שמקפיד על איזון הסוכרת אינו צפוי לסבול מהסיבוכים המתוארים לעיל"
		},	
		]; 