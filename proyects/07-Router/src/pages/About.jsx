import { Link } from "../Link.jsx";

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button:'Ir a home',
    description: '¡Hola! me llamo Nicolas y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button:'Go to home',
    description: 'Hi! My name is Nicolas, and I´m creating a React Router clone.'
  }
}
const usei18n = (lang) => {
  return i18n[lang] || i18n.en
} 

export default function AboutPage({routeParams}) {
  const i18n = usei18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFAuOkW28F_kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683859025410?e=1756944000&v=beta&t=YSHhEhqiSrOufCwUH41zSrPsaHzCYPXd9Y4YiS165gk"
          alt="Foto de nicolas"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
