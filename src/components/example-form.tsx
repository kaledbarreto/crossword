import { ArrowRight } from "lucide-react";

export function ExampleForm() {
  return (
    <form 
      className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
    >
      <input 
        type="text" 
        name="name"
        placeholder="Qual a sua pergunta?"
        autoComplete="off"
        className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
        required
      />

      <button 
        type="submit" 
        className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
      >
        Criar pergunta
        <ArrowRight className="size-4" />
      </button>
    </form>
  )
}