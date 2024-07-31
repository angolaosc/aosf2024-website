import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home'); // Redireciona para a página /home
  return null; // Retorna null porque a função redirect já cuida da navegação
}