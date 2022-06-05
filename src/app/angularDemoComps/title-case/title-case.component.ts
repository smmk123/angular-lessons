import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html'
})
export class TitleCaseComponent implements OnInit {
  pipeTestNum=1234.56789;
  releaseDate= new Date(1999,12,31);
  userString='';
  longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ipsum dui, in ullamcorper mi feugiat et. Morbi dictum ipsum nec feugiat aliquet. Praesent elementum eget lacus eu maximus. Integer pharetra, urna vitae posuere mollis, est lectus mattis turpis, ut euismod ligula nisl eget nisi. Nullam ac ligula a diam mattis varius et vel sapien. Praesent ante sapien, lobortis id dapibus ut, pharetra auctor lacus. Phasellus feugiat tellus a nibh fringilla, id tempus elit tincidunt. Sed congue rhoncus diam, eu semper justo sollicitudin ac. In porta enim quis pellentesque rutrum.";

  onKeyUp(){
  }

  constructor() { }

  ngOnInit(): void {
  }

}
