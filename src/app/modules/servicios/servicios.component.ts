import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/config/tipado/cards.object';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  cards: Card[] = [
    {
      title: 'Amarres',
      description: 'Somos expertos en realizar amarres de amor, y podemos lograr recuperar al ser amado. Que los sentimientos vuelvan a florecer, despertar el amor, la pasión y el deseo. Podemos doblegar su voluntad para que vuelva a respetarte y amarte de verdad. No hay problema si tiene otra relación.',
      buttonText: 'Ver Más',
      img: 'assets/images/carrousel1.jpeg',
      redirect: '/trabajo1',
      value: 748
    },
    {
      title: 'Union de Pareja',
      description: 'Retorno de pareja, amarres de amor, hechizos de amor, conjuros para enamorar, rituales de atracción, magia blanca para el amor, regreso del ser amado, atracción de pareja, rituales para recuperar el amor, conjuros para alejar a terceras personas.',
      buttonText: 'Ver Más',
      img: 'assets/images/IMG-20210204-WA0057.jpg',
      redirect: '/trabajo2',
      value: 658
    },
    {
      title: 'Limpias y Protecciones',
      description: 'Realizamos trabajos para ayudar a proteger de enemigos y ataques psíquicos que te puedan afectar, vive tranquilo y protegido de toda envidia y brujería. Mediante esta limpieza puede librarse de la mala suerte en los negocios y obtener un crecimiento económico que se puede notar al realizar cada uno de los rituales, todo con el fin de ayudarle a ser feliz.',
      buttonText: 'Ver Más',
      img: 'assets/images/IMG-20210204-WA0083.jpg',
      redirect: '/trabajo3',
      value: 271
    },
    {
      title: 'Magia Blanca',
      description: 'La Magia Blanca es un medio ritualistico y mágico, guiada por una serie de conocimientos y dones que generalmente son usados para lograr y obtener resultados en trabajos específicos, bien sean de dinero, amor, salud, etc. La magia funciona efectivamente ya que no trae consecuencias negativas de ninguna clase o tipo, ni para ti, ni para los tuyos.',
      buttonText: 'Ver Más',
      img: 'assets/images/IMG-20210204-WA0059.jpg',
      redirect: '/trabajo4',
      value: 183
    },
    {
      title: 'Lectura del Tarot',
      description: 'Antes de comenzar con tu lectura de Tarot es muy importante que te conectes con la tierra. Esto va a protegerte de la mala energía y ayudará a que te conectes con tus Ángeles Guardianes y Guía Espiritual. Si es que esto suena demasiado para ti entonces cierra los ojos y respira. Inhala y exhala lentamente diez veces y piensa en algo maravilloso que te hace feliz. Cuando estés listo para comenzar con tu lectura de Tarot, contáctanos para que disfrutes de la mejor experiencia.',
      buttonText: 'Ver Más',
      img: 'assets/images/tarot.jpeg',
      redirect: '/trabajo5',
      value: 2089
    }
  ];
  slides: any = [[]];

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 2);
  }
  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
