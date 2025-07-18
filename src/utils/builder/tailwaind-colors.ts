interface TailwindColors {
  backgroundColorVariables: string[]
  textColorVariables: string[]
}

const tailwindColors: TailwindColors = {
  backgroundColorVariables: [
    'none',
    'pbx-bg-white',
    'pbx-bg-black',

    'pbx-bg-slate-50',
    'pbx-bg-slate-100',
    'pbx-bg-slate-200',
    'pbx-bg-slate-300',
    'pbx-bg-slate-400',
    'pbx-bg-slate-500',
    'pbx-bg-slate-600',
    'pbx-bg-slate-700',
    'pbx-bg-slate-800',
    'pbx-bg-slate-900',

    'pbx-bg-gray-50',
    'pbx-bg-gray-100',
    'pbx-bg-gray-200',
    'pbx-bg-gray-300',
    'pbx-bg-gray-400',
    'pbx-bg-gray-500',
    'pbx-bg-gray-600',
    'pbx-bg-gray-700',
    'pbx-bg-gray-800',
    'pbx-bg-gray-900',

    'pbx-bg-zinc-50',
    'pbx-bg-zinc-100',
    'pbx-bg-zinc-200',
    'pbx-bg-zinc-300',
    'pbx-bg-zinc-400',
    'pbx-bg-zinc-500',
    'pbx-bg-zinc-600',
    'pbx-bg-zinc-700',
    'pbx-bg-zinc-800',
    'pbx-bg-zinc-900',

    'pbx-bg-neutral-50',
    'pbx-bg-neutral-100',
    'pbx-bg-neutral-200',
    'pbx-bg-neutral-300',
    'pbx-bg-neutral-400',
    'pbx-bg-neutral-500',
    'pbx-bg-neutral-600',
    'pbx-bg-neutral-700',
    'pbx-bg-neutral-800',
    'pbx-bg-neutral-900',

    'pbx-bg-stone-50',
    'pbx-bg-stone-100',
    'pbx-bg-stone-200',
    'pbx-bg-stone-300',
    'pbx-bg-stone-400',
    'pbx-bg-stone-500',
    'pbx-bg-stone-600',
    'pbx-bg-stone-700',
    'pbx-bg-stone-800',
    'pbx-bg-stone-900',

    'pbx-bg-red-50',
    'pbx-bg-red-100',
    'pbx-bg-red-200',
    'pbx-bg-red-300',
    'pbx-bg-red-400',
    'pbx-bg-red-500',
    'pbx-bg-red-600',
    'pbx-bg-red-700',
    'pbx-bg-red-800',
    'pbx-bg-red-900',

    'pbx-bg-orange-50',
    'pbx-bg-orange-100',
    'pbx-bg-orange-200',
    'pbx-bg-orange-300',
    'pbx-bg-orange-400',
    'pbx-bg-orange-500',
    'pbx-bg-orange-600',
    'pbx-bg-orange-700',
    'pbx-bg-orange-800',
    'pbx-bg-orange-900',

    'pbx-bg-amber-50',
    'pbx-bg-amber-100',
    'pbx-bg-amber-200',
    'pbx-bg-amber-300',
    'pbx-bg-amber-400',
    'pbx-bg-amber-500',
    'pbx-bg-amber-600',
    'pbx-bg-amber-700',
    'pbx-bg-amber-800',
    'pbx-bg-amber-900',

    'pbx-bg-yellow-50',
    'pbx-bg-yellow-100',
    'pbx-bg-yellow-200',
    'pbx-bg-yellow-300',
    'pbx-bg-yellow-400',
    'pbx-bg-yellow-500',
    'pbx-bg-yellow-600',
    'pbx-bg-yellow-700',
    'pbx-bg-yellow-800',
    'pbx-bg-yellow-900',

    'pbx-bg-lime-50',
    'pbx-bg-lime-100',
    'pbx-bg-lime-200',
    'pbx-bg-lime-300',
    'pbx-bg-lime-400',
    'pbx-bg-lime-500',
    'pbx-bg-lime-600',
    'pbx-bg-lime-700',
    'pbx-bg-lime-800',
    'pbx-bg-lime-900',

    'pbx-bg-green-50',
    'pbx-bg-green-100',
    'pbx-bg-green-200',
    'pbx-bg-green-300',
    'pbx-bg-green-400',
    'pbx-bg-green-500',
    'pbx-bg-green-600',
    'pbx-bg-green-700',
    'pbx-bg-green-800',
    'pbx-bg-green-900',

    'pbx-bg-emerald-50',
    'pbx-bg-emerald-100',
    'pbx-bg-emerald-200',
    'pbx-bg-emerald-300',
    'pbx-bg-emerald-400',
    'pbx-bg-emerald-500',
    'pbx-bg-emerald-600',
    'pbx-bg-emerald-700',
    'pbx-bg-emerald-800',
    'pbx-bg-emerald-900',

    'pbx-bg-teal-50',
    'pbx-bg-teal-100',
    'pbx-bg-teal-200',
    'pbx-bg-teal-300',
    'pbx-bg-teal-400',
    'pbx-bg-teal-500',
    'pbx-bg-teal-600',
    'pbx-bg-teal-700',
    'pbx-bg-teal-800',
    'pbx-bg-teal-900',

    'pbx-bg-cyan-50',
    'pbx-bg-cyan-100',
    'pbx-bg-cyan-200',
    'pbx-bg-cyan-300',
    'pbx-bg-cyan-400',
    'pbx-bg-cyan-500',
    'pbx-bg-cyan-600',
    'pbx-bg-cyan-700',
    'pbx-bg-cyan-800',
    'pbx-bg-cyan-900',

    'pbx-bg-sky-50',
    'pbx-bg-sky-100',
    'pbx-bg-sky-200',
    'pbx-bg-sky-300',
    'pbx-bg-sky-400',
    'pbx-bg-sky-500',
    'pbx-bg-sky-600',
    'pbx-bg-sky-700',
    'pbx-bg-sky-800',
    'pbx-bg-sky-900',

    'pbx-bg-blue-50',
    'pbx-bg-blue-100',
    'pbx-bg-blue-200',
    'pbx-bg-blue-300',
    'pbx-bg-blue-400',
    'pbx-bg-blue-500',
    'pbx-bg-blue-600',
    'pbx-bg-blue-700',
    'pbx-bg-blue-800',
    'pbx-bg-blue-900',

    'pbx-bg-indigo-50',
    'pbx-bg-indigo-100',
    'pbx-bg-indigo-200',
    'pbx-bg-indigo-300',
    'pbx-bg-indigo-400',
    'pbx-bg-indigo-500',
    'pbx-bg-indigo-600',
    'pbx-bg-indigo-700',
    'pbx-bg-indigo-800',
    'pbx-bg-indigo-900',

    'pbx-bg-violet-50',
    'pbx-bg-violet-100',
    'pbx-bg-violet-200',
    'pbx-bg-violet-300',
    'pbx-bg-violet-400',
    'pbx-bg-violet-500',
    'pbx-bg-violet-600',
    'pbx-bg-violet-700',
    'pbx-bg-violet-800',
    'pbx-bg-violet-900',

    'pbx-bg-purple-50',
    'pbx-bg-purple-100',
    'pbx-bg-purple-200',
    'pbx-bg-purple-300',
    'pbx-bg-purple-400',
    'pbx-bg-purple-500',
    'pbx-bg-purple-600',
    'pbx-bg-purple-700',
    'pbx-bg-purple-800',
    'pbx-bg-purple-900',

    'pbx-bg-fuchsia-50',
    'pbx-bg-fuchsia-100',
    'pbx-bg-fuchsia-200',
    'pbx-bg-fuchsia-300',
    'pbx-bg-fuchsia-400',
    'pbx-bg-fuchsia-500',
    'pbx-bg-fuchsia-600',
    'pbx-bg-fuchsia-700',
    'pbx-bg-fuchsia-800',
    'pbx-bg-fuchsia-900',

    'pbx-bg-pink-50',
    'pbx-bg-pink-100',
    'pbx-bg-pink-200',
    'pbx-bg-pink-300',
    'pbx-bg-pink-400',
    'pbx-bg-pink-500',
    'pbx-bg-pink-600',
    'pbx-bg-pink-700',
    'pbx-bg-pink-800',
    'pbx-bg-pink-900',

    'pbx-bg-rose-50',
    'pbx-bg-rose-100',
    'pbx-bg-rose-200',
    'pbx-bg-rose-300',
    'pbx-bg-rose-400',
    'pbx-bg-rose-500',
    'pbx-bg-rose-600',
    'pbx-bg-rose-700',
    'pbx-bg-rose-800',
    'pbx-bg-rose-900',
  ],
  textColorVariables: [
    'none',
    'pbx-text-white',
    'pbx-text-black',

    'pbx-text-slate-50',
    'pbx-text-slate-100',
    'pbx-text-slate-200',
    'pbx-text-slate-300',
    'pbx-text-slate-400',
    'pbx-text-slate-500',
    'pbx-text-slate-600',
    'pbx-text-slate-700',
    'pbx-text-slate-800',
    'pbx-text-slate-900',

    'pbx-text-gray-50',
    'pbx-text-gray-100',
    'pbx-text-gray-200',
    'pbx-text-gray-300',
    'pbx-text-gray-400',
    'pbx-text-gray-500',
    'pbx-text-gray-600',
    'pbx-text-gray-700',
    'pbx-text-gray-800',
    'pbx-text-gray-900',

    'pbx-text-zinc-50',
    'pbx-text-zinc-100',
    'pbx-text-zinc-200',
    'pbx-text-zinc-300',
    'pbx-text-zinc-400',
    'pbx-text-zinc-500',
    'pbx-text-zinc-600',
    'pbx-text-zinc-700',
    'pbx-text-zinc-800',
    'pbx-text-zinc-900',

    'pbx-text-neutral-50',
    'pbx-text-neutral-100',
    'pbx-text-neutral-200',
    'pbx-text-neutral-300',
    'pbx-text-neutral-400',
    'pbx-text-neutral-500',
    'pbx-text-neutral-600',
    'pbx-text-neutral-700',
    'pbx-text-neutral-800',
    'pbx-text-neutral-900',

    'pbx-text-stone-50',
    'pbx-text-stone-100',
    'pbx-text-stone-200',
    'pbx-text-stone-300',
    'pbx-text-stone-400',
    'pbx-text-stone-500',
    'pbx-text-stone-600',
    'pbx-text-stone-700',
    'pbx-text-stone-800',
    'pbx-text-stone-900',

    'pbx-text-red-50',
    'pbx-text-red-100',
    'pbx-text-red-200',
    'pbx-text-red-300',
    'pbx-text-red-400',
    'pbx-text-red-500',
    'pbx-text-red-600',
    'pbx-text-red-700',
    'pbx-text-red-800',
    'pbx-text-red-900',

    'pbx-text-orange-50',
    'pbx-text-orange-100',
    'pbx-text-orange-200',
    'pbx-text-orange-300',
    'pbx-text-orange-400',
    'pbx-text-orange-500',
    'pbx-text-orange-600',
    'pbx-text-orange-700',
    'pbx-text-orange-800',
    'pbx-text-orange-900',

    'pbx-text-amber-50',
    'pbx-text-amber-100',
    'pbx-text-amber-200',
    'pbx-text-amber-300',
    'pbx-text-amber-400',
    'pbx-text-amber-500',
    'pbx-text-amber-600',
    'pbx-text-amber-700',
    'pbx-text-amber-800',
    'pbx-text-amber-900',

    'pbx-text-yellow-50',
    'pbx-text-yellow-100',
    'pbx-text-yellow-200',
    'pbx-text-yellow-300',
    'pbx-text-yellow-400',
    'pbx-text-yellow-500',
    'pbx-text-yellow-600',
    'pbx-text-yellow-700',
    'pbx-text-yellow-800',
    'pbx-text-yellow-900',

    'pbx-text-lime-50',
    'pbx-text-lime-100',
    'pbx-text-lime-200',
    'pbx-text-lime-300',
    'pbx-text-lime-400',
    'pbx-text-lime-500',
    'pbx-text-lime-600',
    'pbx-text-lime-700',
    'pbx-text-lime-800',
    'pbx-text-lime-900',

    'pbx-text-green-50',
    'pbx-text-green-100',
    'pbx-text-green-200',
    'pbx-text-green-300',
    'pbx-text-green-400',
    'pbx-text-green-500',
    'pbx-text-green-600',
    'pbx-text-green-700',
    'pbx-text-green-800',
    'pbx-text-green-900',

    'pbx-text-emerald-50',
    'pbx-text-emerald-100',
    'pbx-text-emerald-200',
    'pbx-text-emerald-300',
    'pbx-text-emerald-400',
    'pbx-text-emerald-500',
    'pbx-text-emerald-600',
    'pbx-text-emerald-700',
    'pbx-text-emerald-800',
    'pbx-text-emerald-900',

    'pbx-text-teal-50',
    'pbx-text-teal-100',
    'pbx-text-teal-200',
    'pbx-text-teal-300',
    'pbx-text-teal-400',
    'pbx-text-teal-500',
    'pbx-text-teal-600',
    'pbx-text-teal-700',
    'pbx-text-teal-800',
    'pbx-text-teal-900',

    'pbx-text-cyan-50',
    'pbx-text-cyan-100',
    'pbx-text-cyan-200',
    'pbx-text-cyan-300',
    'pbx-text-cyan-400',
    'pbx-text-cyan-500',
    'pbx-text-cyan-600',
    'pbx-text-cyan-700',
    'pbx-text-cyan-800',
    'pbx-text-cyan-900',

    'pbx-text-sky-50',
    'pbx-text-sky-100',
    'pbx-text-sky-200',
    'pbx-text-sky-300',
    'pbx-text-sky-400',
    'pbx-text-sky-500',
    'pbx-text-sky-600',
    'pbx-text-sky-700',
    'pbx-text-sky-800',
    'pbx-text-sky-900',

    'pbx-text-blue-50',
    'pbx-text-blue-100',
    'pbx-text-blue-200',
    'pbx-text-blue-300',
    'pbx-text-blue-400',
    'pbx-text-blue-500',
    'pbx-text-blue-600',
    'pbx-text-blue-700',
    'pbx-text-blue-800',
    'pbx-text-blue-900',

    'pbx-text-indigo-50',
    'pbx-text-indigo-100',
    'pbx-text-indigo-200',
    'pbx-text-indigo-300',
    'pbx-text-indigo-400',
    'pbx-text-indigo-500',
    'pbx-text-indigo-600',
    'pbx-text-indigo-700',
    'pbx-text-indigo-800',
    'pbx-text-indigo-900',

    'pbx-text-violet-50',
    'pbx-text-violet-100',
    'pbx-text-violet-200',
    'pbx-text-violet-300',
    'pbx-text-violet-400',
    'pbx-text-violet-500',
    'pbx-text-violet-600',
    'pbx-text-violet-700',
    'pbx-text-violet-800',
    'pbx-text-violet-900',

    'pbx-text-purple-50',
    'pbx-text-purple-100',
    'pbx-text-purple-200',
    'pbx-text-purple-300',
    'pbx-text-purple-400',
    'pbx-text-purple-500',
    'pbx-text-purple-600',
    'pbx-text-purple-700',
    'pbx-text-purple-800',
    'pbx-text-purple-900',

    'pbx-text-fuchsia-50',
    'pbx-text-fuchsia-100',
    'pbx-text-fuchsia-200',
    'pbx-text-fuchsia-300',
    'pbx-text-fuchsia-400',
    'pbx-text-fuchsia-500',
    'pbx-text-fuchsia-600',
    'pbx-text-fuchsia-700',
    'pbx-text-fuchsia-800',
    'pbx-text-fuchsia-900',

    'pbx-text-pink-50',
    'pbx-text-pink-100',
    'pbx-text-pink-200',
    'pbx-text-pink-300',
    'pbx-text-pink-400',
    'pbx-text-pink-500',
    'pbx-text-pink-600',
    'pbx-text-pink-700',
    'pbx-text-pink-800',
    'pbx-text-pink-900',

    'pbx-text-rose-50',
    'pbx-text-rose-100',
    'pbx-text-rose-200',
    'pbx-text-rose-300',
    'pbx-text-rose-400',
    'pbx-text-rose-500',
    'pbx-text-rose-600',
    'pbx-text-rose-700',
    'pbx-text-rose-800',
    'pbx-text-rose-900',
  ],
}

export default tailwindColors
