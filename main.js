let themaContainerList = [
	['werWirSind', 					'',												'', 		'<h2>Wer Wir Sind</h2><hr><p>Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext </p><img id="WerWirSindSchullogo" src="Bilder/Schullogo.jpg" alt="Schullogo des EVI: Fisch auf blauem Hintergrund mit Wellenmuster"><p>...</p>'],
	['juedischesLebenInNeuruppin',	'Schülerprojekt: Jüdisches Leben in Neuruppin',	'2017', 	'<h2>Jüdisches Leben in Neuruppin</h2><hr><p>Schüler erforschen jüdisches Leben – Auf eine ungewöhnliche Spurensuche haben sich 29 Schüler der Evangelischen Schule Neuruppin begeben:<br><br>Ein Jahr lang haben sie über jüdisches Leben in der Fontanestadt geforscht. Herausgekommen ist nicht allein eine Ausstellung, die jetzt im Rathaus zu sehen ist, sondern ebenfalls ein Film über das Projekt.</p><p class="Quellenangabe">MAZonline, 12.12.2016</p>'],
	['lernenTrifftLeben',			'Schülerprojekt: Jüdisches Leben in Neuruppin',	'2017',	 	'<h2>Lernen trifft Leben</h2><hr><p>Ausgangspunkt des Schulentwicklungsprojekts „Lernen trifft Leben“ der Evangelischen Schule Neuruppin ist die Frage, wie schulisches Lernen aus den individuellen Bedürfnissen der Schüler heraus gestaltet werden kann, um in der Vorbereitung des Übergangs von Schule in die Berufswelt und in die Zeit nach der Schule wirksam zu werden.<br><br>Der Prozess der Persönlichkeitsentwicklung, welchen die Schüler gerade in den Schuljahren der Sekundarstufe I durchlaufen, ist folgenreich. Entwicklungspsychologisch befinden sich die Jugendlichen im Übergang von zwischen Kindheit und frühem Erwachsenenalter. Diese Phase der Identitäts- und Orientierungsfindung ist durch vielfältige Bewältigungsleistungen gekennzeichnet.<br><br>Daraus ergibt sich unseres Erachtens zwingend die Frage nach dem Auftrag von Schule, damit die Jugendlichen sich in der Gesellschaft orientieren können und für sich klären, welchen beruflichen Weg sie nach der Schule einschlagen wollen.</p>'],
	['sichtbarEvangelisch',			'Schülerprojekt: Sichtbar Evangelisch',			'2016', 	'<h2>Sichtbar Evangelisch</h2><hr><p>Am 3. Februar 2016 zeichnete die Evangelischen Schulstiftung in der EKD die Evangelische Schule Neuruppin mit dem 1. Platz ihrer bundesweiten Ausschreibung „Sichtbar Evangelisch“ aus.<br><br>Aufgabe war es, ein künstlerisch ausdrucksvolles Schul- oder Klassenkreuz einzureichen. Im Vordergrund sollten dabei neben der künstlerischen Gestaltung vor allem die religiöse Einbindung und Entstehungsgeschichte stehen. Hintergrund dieser Ausschreibung war bzw. ist die besondere Bedeutung von evangelischen Schulen in den konfessionsarmen Landeskirchen, da sie unverzichtbare Botschafter sind und wesentlich dazu beitragen, dass Kirche sichtbar wird.</p>'],
	['schulfest',					'Schulfest',									'2015', 	'<h2>Schulfest</h2><hr><p>In der Reformpädagogik gilt das gemeinschaftliche Feiern als eineorm des Lernens. Deshalb ist das Schulfest fester Bestandteil des Veranstaltungskalenders der Evangelischen Schule Neuruppin.<br><br>Das erste Schulfest wurde im Gründungsschuljahr 1993/1994 von den Eltern initiiert und mit der Schulgemeinde organisiert.<br><br>Seitdem findet dieses Fest jedes Schuljahr statt, auf welchem sich Schüler, Eltern, Lehrer, Ehemalige und Freunde der Schule begegnen. Das Schulfest stellt einen weiteren Höhepunkt des Schuljahres dar.</p>'],
	['schueleraustausch',			'Schüleraustausch',								'2015', 	'<h2>Schüleraustausch</h2><hr><p>...</p>'],
	['theater',						'Theater',										'2015', 	'<h2>Theater</h2><hr><p>...</p>'],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
];

let themaContainerAnzahl = 1;
projekte = document.querySelector('#projekte');
renderThemaContainers();
body = document.querySelector('body');
themaContainer = document.querySelector('.themaContainer');
footerSpans = document.querySelectorAll('footer span');
let plusBildHeight;
let plusBildIdentifier;
let detailsDivHeaderHeight;
let detailsDivHeight;
let detailsDivXMarginLeft;
let detailsOpen = false;
let em;
let detailsDivContentHeight = "";
let ausblendeContainer;






detailsDivCloser = document.querySelectorAll('.plusBildImg, .datumDivContainer, .platzhalter, nav, footer, #startbild');
detailsDivCloser.forEach(function(item){
	item.addEventListener('click', hideDetails);
});

window.addEventListener("resize", resize);
window.addEventListener("load", resize);
function resize(){
	plusBildHeight = themaContainer.firstElementChild.offsetHeight;
	body.style.setProperty("--plusBildHeight", plusBildHeight + "px");
	if(detailsOpen == true){
		syncDetailsDivHeight();
		syncDetailsDivContentHeight();
		syncDetailsDivAnimationHeight();
	}
	datumDivContainers.forEach(function(item){
			item.style.setProperty('height', item.parentElement.firstElementChild.offsetHeight + 100 + "px");
	});
	syncPlusButtonDivHeight();
	syncFooterSpan();
}

detailsDiv = document.createElement('div');
detailsDiv.classList.add('detailsDiv');
minus = document.createElement('img');
minus.setAttribute('src','Bilder/minus.png');
minus.setAttribute('alt','x');
minus.classList.add('minus');
detailsDiv.appendChild(minus);
minus.addEventListener('click', hideDetails);
detailsDivContent = document.createElement('div');
detailsDivContent.classList.add('detailsDivContent');
detailsDivAnimation = document.createElement('div');
detailsDivAnimation.classList.add('detailsDivAnimation');
detailsDivAnimation.innerHTML = '<h2></h2><hr>';

plusImg = document.querySelectorAll('.plusImg');
plusImg.forEach(function(item){
	item.addEventListener('click', showDetails);
});

mehrAnzeigenPlus = document.querySelector('#mehrAnzeigenPlus');
mehrAnzeigenPlus.removeEventListener('click', showDetails);
mehrAnzeigenPlus.addEventListener('click', renderThemaContainers);
mehrAnzeigenPlus.addEventListener('click', syncPlusButtonDivHeight);





function showDetails(){
	detailsOpen = true;
	detailsDiv.classList.remove("werWirSindDetailsDiv");
	detailsDivAnimation.classList.remove("werWirSindDetailsDivAnimation");
	plusBildIdentifier = this.getAttribute('id');
	if (plusBildIdentifier == '0'){
		detailsDiv.classList.add('werWirSindDetailsDiv');
		detailsDivAnimation.classList.add('werWirSindDetailsDivAnimation');
		ausblendeContainer = this.parentNode.parentNode;
	}else{
		ausblendeContainer = this.parentNode;
	}
	ausblendeContainer.style.setProperty("display", "none");
	
	if (detailsDiv.parentElement != null){
		detailsDiv.parentElement.firstElementChild.nextElementSibling.style.setProperty("display", "flex");
	}
	
	while(detailsDiv[1] != undefined){
		detailsDiv.removeChild(detailsDiv.lastChild);
	}
	
	detailsDivContent.innerHTML = themaContainerList[plusBildIdentifier][3];
	detailsDiv.appendChild(detailsDivContent);
	ausblendeContainer.parentNode.appendChild(detailsDiv);
	syncDetailsDivHeight();
	syncDetailsDivContentHeight();
	detailsDivHeaderHeight = detailsDiv.lastChild.firstChild.offsetHeight + 12 * ((84 * (detailsDiv.offsetWidth - 15) / 100)-1) / 100 + 3 * (detailsDiv.offsetWidth - 15) / 100;
	body.style.setProperty("--height", detailsDivHeaderHeight + "px");
	syncDetailsDivAnimationHeight();
	ausblendeContainer.parentNode.appendChild(detailsDivAnimation);
}

function syncPlusButtonDivHeight(){
	plusButtonDivs.forEach(function(item){
		item.style.setProperty('height', item.parentElement.firstElementChild.offsetHeight + "px");
	});
}

function syncDetailsDivHeight(){
		if (plusBildIdentifier != '0'){
			detailsDiv.style.setProperty('height', detailsDiv.parentElement.offsetHeight + "px");
}}

function syncDetailsDivContentHeight(){
		em = parseFloat(getComputedStyle(detailsDiv).fontSize);
		detailsDivContentHeight = detailsDiv.offsetHeight - em;
		detailsDivContent.style.setProperty('height', detailsDivContentHeight + "px");
}

function syncDetailsDivAnimationHeight(){
	detailsDivAnimation.style.setProperty('height', detailsDiv.offsetHeight + "px");
}

function syncFooterSpan(){
	footerSpans.forEach(function(item){
		item.style.setProperty('line-height', item.parentElement.offsetHeight / 4 + "px");
	});
}

function hideDetails(){
	if (detailsOpen == true){
		if (this != detailsDiv && this.classList[0] != 'plusButtonDiv' && this.getAttribute('id') != 'plusButtonDivContainer'){
			detailsOpen = false;
			ausblendeContainer.style.setProperty("display", "flex");
			detailsDiv.parentElement.removeChild(detailsDiv.parentElement.lastChild);
			detailsDiv.parentElement.removeChild(detailsDiv.parentElement.lastChild);
}}}
	
function renderThemaContainers(){
	for (i = themaContainerAnzahl, themaContainerAnzahl += 3; i < themaContainerAnzahl && i < themaContainerList.length; i++){
		themaContainer = document.createElement('div');
		themaContainer.classList.add('themaContainer');
			plusBildContainer = document.createElement('div');
			plusBildContainer.classList.add('plusBildContainer');
				plusBildImg = document.createElement('img');
				plusBildImg.classList.add('plusBildImg');
				plusBildImg.setAttribute('src','Bilder/PlusBilder/' + themaContainerList[i][0] + '.jpg');
				plusButtonDiv = document.createElement('div');
				plusButtonDiv.classList.add('plusButtonDiv');
					plusImg = document.createElement('img');
					plusImg.classList.add('plusImg');
					plusImg.setAttribute('id', i);
					plusImg.setAttribute('src','Bilder/Plus.png');
					plusImg.setAttribute('alt','+');
				plusButtonDiv.appendChild(plusImg);
				plusBildTitel = document.createElement('span');
				plusBildTitel.appendChild(document.createTextNode(themaContainerList[i][1]));
			plusBildContainer.appendChild(plusBildImg);
			plusBildContainer.appendChild(plusButtonDiv);
			plusBildContainer.appendChild(plusBildTitel);
			datumDivContainer = document.createElement('div');
			datumDivContainer.classList.add('datumDivContainer');
				datumDiv = document.createElement('div');
				datumDiv.classList.add('datumDiv');
					datumDivP = document.createElement('p');
					datumDivP.appendChild(document.createTextNode(themaContainerList[i][2]));
				datumDiv.appendChild(datumDivP);
			datumDivContainer.appendChild(datumDiv);
			datumDivContainer.appendChild(document.createElement('hr'));
		themaContainer.appendChild(plusBildContainer);
		themaContainer.appendChild(datumDivContainer);
		
		projekte.insertBefore(themaContainer, projekte.childNodes[i]);
	}
	
	if (i == themaContainerList.length){
		this.parentNode.style.setProperty('display', 'none');
	}
	
	datumDivContainers = document.querySelectorAll(".datumDivContainer");
	plusButtonDivs = document.querySelectorAll('.plusButtonDiv');
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	