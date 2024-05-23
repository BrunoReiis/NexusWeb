import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";

export default function SobrePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "fullviolet" })}>Sobre Nós</h1>
        </div>
      </section>
      <section>
        <h1 className={title({ color: "fullviolet", size: "sm" })}>
          Bem-vindo ao NexusFT!
        </h1>
        <p className="text-large mb-4">
          No NexusFT, você encontrará uma comunidade vibrante e acolhedora de
          jogadores e entusiastas de diversos jogos. Seja você um veterano em
          busca de um time competitivo ou um novato querendo fazer novos amigos,
          nosso servidor de Discord é o lugar ideal para você!
        </p>
        <h1 className={title({ color: "fullviolet", size: "sm" })}>
          Conecte-se e Divirta-se
        </h1>
        <p className="text-large mb-4">
          No NexusFT, a diversão nunca para. Com um foco especial em jogos como
          Valorant e League of Legends, nossos membros estão sempre prontos para
          uma partida emocionante ou para discutir estratégias e compartilhar
          dicas. Mas não se preocupe, temos espaço para muitos outros jogos e
          interesses também!
        </p>
        <h1 className={title({ color: "fullviolet", size: "sm" })}>
          O Que Oferecemos:
        </h1>
        <p className="text-large">
          <span className="font-bold">Salas de Conversa:</span> Encontre canais
          dedicados para discussões sobre diferentes jogos, além de salas para
          conversas gerais onde você pode relaxar e conhecer novos amigos.
        </p>
        <p className="text-large">
          <span className="font-bold">Eventos e Torneios:</span> Participe de
          eventos regulares e torneios emocionantes, com prêmios e muita
          diversão.
        </p>
        <p className="text-large mb-4">
          <span className="font-bold">Comunidade Ativa:</span> Faça parte de uma
          comunidade amigável e ativa, sempre pronta para ajudar e compartilhar
          experiências.
        </p>
        <h1 className={title({ color: "fullviolet", size: "sm" })}>
          Por que NexusFT?
        </h1>
        <p className="text-large">
          <span className="font-bold">
            NexusFT é mais do que apenas um servidor de Discord. É um lugar onde
            você pode:
          </span>
        </p>
        <p className="text-large">
          <span className="font-bold">Fazer Novos Amigos:</span> Nossa
          comunidade é diversa e acolhedora, perfeita para conhecer pessoas com
          interesses semelhantes.
        </p>
        <p className="text-large">
          <span className="font-bold">Melhorar Suas Habilidades:</span> Aprenda
          com outros jogadores, participe de treinos e melhore seu desempenho
          nos jogos.
        </p>
        <p className="text-large mb-4">
          <span className="font-bold">Divertir-se Sem Limites:</span> Com uma
          variedade de jogos e atividades, há sempre algo novo para experimentar
          e aproveitar.
        </p>
        <h1 className={title({ color: "fullviolet", size: "sm" })}>
          Junte-se a Nós!
        </h1>
        <p className="text-large mb-4">
          Está pronto para entrar na ação? Junte-se ao NexusFT e descubra um
          mundo de oportunidades, amizades e diversão. Clique no link abaixo
          para entrar no nosso servidor de Discord e começar sua jornada hoje
          mesmo!
        </p>
      </section>
    </DefaultLayout>
  );
}
