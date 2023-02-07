import React, { useEffect, useState, FormEvent } from "react";
import { GameController, Check } from "phosphor-react";
import Input from "./Form/Input";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import axios from "axios";

interface Game {
  id: string;
  title: string;
}

function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [activeDays, setActiveDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  const daysOfTheWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: activeDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });

      alert("anúncio criado com sucesso");
    } catch (err) {
      console.log(err);
      alert("erro ao criar o anúncio");
    }
  }

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed">
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <form
              onSubmit={handleCreateAd}
              className="mt-8 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <select
                  id="game"
                  name="game"
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                  defaultValue=""
                >
                  <option disabled value="">
                    Selecione o game que deseja jogar
                  </option>

                  {games.map((game) => {
                    return (
                      <option key={game.id} value={game.id}>
                        {game.title}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input
                    name="yearsPlaying"
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input
                    type="text"
                    id="discord"
                    name="discord"
                    placeholder="Usuario#0000"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <ToggleGroup.Root
                    className="grid grid-cols-4 gap-2"
                    type="multiple"
                    value={activeDays}
                    onValueChange={setActiveDays}
                  >
                    {daysOfTheWeek.map((day, index) => (
                      <ToggleGroup.Item
                        value={index.toString()}
                        title={day}
                        className={`w-8 h-8 rounded bg-zinc-900 ${
                          activeDays.includes(index.toString())
                            ? "bg-violet-500"
                            : ""
                        }`}
                      >
                        {day.charAt(0)}
                      </ToggleGroup.Item>
                    ))}
                  </ToggleGroup.Root>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual o horário do dia?</label>
                  <div className="grid grid-cols-2 gap-1">
                    <Input
                      type="time"
                      name="hourStart"
                      id="hourStart"
                      placeholder="De"
                    />
                    <Input
                      type="time"
                      name="hourEnd"
                      id="hourEnd"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>

              <label className="mt-2 flex items-center gap-2 text-sm">
                <Checkbox.Root
                  checked={useVoiceChannel}
                  onCheckedChange={(checked) => {
                    if (checked === true) {
                      setUseVoiceChannel(true);
                    } else {
                      setUseVoiceChannel(false);
                    }
                  }}
                  className="w-6 h-6 p-1 rounded bg-zinc-900"
                >
                  <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo me conectar no chat de voz
              </label>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </div>
  );
}

export default CreateAdModal;
