import React, { useState } from "react";
import "./App.css";

const perguntas = [
    {
        pergunta: "Quem é o protagonista de Bleach?",

        opcoes: [
            "Uryu Ishida",
            "Ichigo Kurosaki",
            "Rukia Kuchiki",
            "Renji Abarai",
        ],

        resposta: "Ichigo Kurosaki",
    },

    {
        pergunta: "Qual é o nome da espada de Ichigo Kurosaki?",

        opcoes: [
            "Sode no Shirayuki",
            "Zangetsu",
            "Senbonzakura",
            "Tensa Zangetsu",
        ],

        resposta: "Zangetsu",
    },

    {
        pergunta: "Qual é a posição de Byakuya Kuchiki na Soul Society?",

        opcoes: [
            "Capitão da 6ª Divisão",
            "Tenente da 5ª Divisão",
            "Capitão da 3ª Divisão",
            "Tenente da 2ª Divisão",
        ],

        resposta: "Capitão da 6ª Divisão",
    },

    {
        pergunta: "Qual é o nome do vilão principal no arco da Soul Society?",

        opcoes: [
            "Sosuke Aizen",
            "Gin Ichimaru",
            "Kaname Tosen",
            "Grimmjow Jaegerjaquez",
        ],

        resposta: "Sosuke Aizen",
    },

    {
        pergunta: "Como é chamado o poder especial dos Quincy?",

        opcoes: ["Hollowfication", "Bankai", "Resurrección", "Vollstandig"],

        resposta: "Vollstandig",
    },

    {
        pergunta:
            "Qual é o nome da técnica final de Ichigo que ele usa contra Aizen?",

        opcoes: [
            "Getsuga Tensho",
            "Mugetsu",
            "Hado 90: Kurohitsugi",
            "Bakudo 99: Kin",
        ],

        resposta: "Mugetsu",
    },

    {
        pergunta: "Quem é o criador do anime Bleach?",

        opcoes: [
            "Eiichiro Oda",
            "Masashi Kishimoto",
            "Tite Kubo",
            "Hiro Mashima",
        ],

        resposta: "Tite Kubo",
    },

    {
        pergunta: "Qual é o nome da habilidade especial de Uryu Ishida?",

        opcoes: ["Hirenkyaku", "Shikai", "Bankai", "Cero"],

        resposta: "Hirenkyaku",
    },

    {
        pergunta: "Quem é o tenente da 10ª Divisão?",

        opcoes: [
            "Rangiku Matsumoto",
            "Momo Hinamori",
            "Izuru Kira",
            "Yachiru Kusajishi",
        ],

        resposta: "Rangiku Matsumoto",
    },

    {
        pergunta: "Qual é o verdadeiro nome do Espada número 4?",

        opcoes: [
            "Ulquiorra Cifer",
            "Nnoitra Gilga",
            "Grimmjow Jaegerjaquez",
            "Coyote Starrk",
        ],

        resposta: "Ulquiorra Cifer",
    },
];

function Quiz() {
    const [indicePergunta, setIndicePergunta] = useState(0);

    const [respostas, setRespostas] = useState([]);

    const [resultado, setResultado] = useState(null);

    const responder = (respostaSelecionada) => {
        setRespostas([...respostas, respostaSelecionada]);

        if (indicePergunta + 1 < perguntas.length) {
            setIndicePergunta(indicePergunta + 1);
        } else {
            calcularResultado();
        }
    };

    const calcularResultado = () => {
        let pontuacao = 0;

        for (let i = 0; i < perguntas.length; i++) {
            if (respostas[i] === perguntas[i].resposta) {
                pontuacao++;
            }
        }

        setResultado(pontuacao);
    };

    const reiniciarQuiz = () => {
        setIndicePergunta(0);

        setRespostas([]);

        setResultado(null);
    };

    return (
        <div className="page-quiz">
            {resultado !== null ? (
                <div className="container">
                    <h2>Resultado do Quiz</h2>

                    <p>
                        Você acertou {resultado} de {perguntas.length}{" "}
                        perguntas!
                    </p>

                    <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
                </div>
            ) : (
                <div className="container">
                    <h2>Pergunta {indicePergunta + 1}</h2>

                    <p>{perguntas[indicePergunta].pergunta}</p>

                    <ul>
                        {perguntas[indicePergunta].opcoes.map(
                            (opcao, index) => (
                                <li
                                    key={index}
                                    onClick={() => responder(opcao)}
                                >
                                    {opcao}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Quiz;
