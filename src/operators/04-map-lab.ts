import {fromEvent} from "rxjs";
import {map, tap} from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, ligula a varius elementum, urna tellus luctus orci, quis vestibulum est nunc quis enim. Quisque aliquet aliquet ultrices. Fusce lobortis fringilla diam, vel efficitur erat euismod sed. Fusce neque ipsum, posuere sed sem sit amet, faucibus feugiat turpis. Nam tristique nibh nisi, eget aliquet nisl efficitur eget. Etiam sed quam lobortis, dignissim erat eget, malesuada libero. Aenean et euismod sapien, non interdum tellus. Mauris molestie sem tortor, imperdiet tempus magna tristique a.
<br/>
<br/>
Donec ac dui id ante blandit ultrices. Proin rhoncus magna et scelerisque luctus. Fusce non euismod dui. Etiam condimentum vel orci ut fermentum. Duis sit amet aliquet nisl, quis consequat lorem. Praesent feugiat eleifend viverra. Nulla tempus consequat tortor, non vestibulum erat venenatis sed. Morbi interdum rhoncus ornare. Proin imperdiet nibh metus, vitae malesuada risus accumsan volutpat. Vivamus sem dolor, dictum a risus malesuada, sodales facilisis sapien. Nulla facilisi. Aenean congue risus libero, vel rutrum nisi elementum ut.
<br/>
<br/>
Aenean id tempus tortor. Suspendisse ut fermentum nisi, porttitor tristique nisl. Mauris sollicitudin lacinia turpis, eget iaculis nulla laoreet et. Donec varius tempus sem id maximus. In a dapibus lorem. Pellentesque efficitur, mi et mollis condimentum, sapien quam euismod nisi, hendrerit accumsan augue elit vitae mauris. In eu metus a odio posuere bibendum eget vitae nunc. Aenean tincidunt risus ut metus ultrices ultrices. Nunc lacus enim, fermentum in leo vehicula, euismod congue tortor.
<br/>
<br/>
Maecenas ac dolor ut risus euismod egestas eu et risus. Fusce dolor massa, porttitor vitae neque pretium, maximus congue felis. Aenean at nunc nec mi molestie gravida. Maecenas ultrices facilisis dui quis tempus. Quisque vitae ullamcorper nisi. Integer varius commodo sapien. Aenean at venenatis sapien, a porttitor ex. Integer et neque metus. Etiam a tristique nibh, et ultrices justo. Vivamus facilisis ligula nibh, sed scelerisque odio eleifend eget. Nulla lobortis ipsum a sem egestas, at pulvinar mauris tincidunt. Integer vel tempor mi, nec bibendum enim. Morbi in elit auctor, pellentesque dui ac, iaculis diam. Praesent cursus enim ipsum, vitae faucibus tortor suscipit imperdiet. Nulla ultricies, lorem venenatis efficitur hendrerit, purus urna suscipit ligula, quis laoreet nibh risus ac quam. Mauris a nunc elementum, placerat mi sit amet, dictum lectus.
<br/>
<br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rutrum sodales lorem et vehicula. Donec sagittis ut risus et iaculis. In et justo vulputate, consequat leo nec, lacinia ante. Vivamus ac erat finibus, dignissim leo eget, euismod quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ac mauris non malesuada. Proin aliquet euismod nibh, nec dapibus lectus mattis ac. Fusce volutpat erat faucibus augue fermentum posuere. Morbi mollis rhoncus quam at feugiat. Nullam faucibus turpis a tempor cursus. Praesent id est ipsum.
`;

const body = document.querySelector("body");
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar'
body.append(text, progressBar);

const scrollPercent = event => {
  const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
  return scrollTop / (scrollHeight - clientHeight) * 100;
}


const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  map(scrollPercent),
  tap(console.log)
);

progress$.subscribe(percent => {
  progressBar.style.width = `${percent}%`;
})

