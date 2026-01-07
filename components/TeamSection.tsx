import Link from 'next/link'

const members = [
    {
        name: 'Tushar Mondal',
        role: 'Business Lead',
        avatar: '/assets/team/t6.jpg',
        link: '#',
    },
    {
        name: 'Asutosh Sidhya',
        role: 'Business Lead',
        avatar: '/assets/team/t5.jpg',
        link: '#',
    },
    {
        name: 'Bubai Mondal',
        role: 'Designer',
        avatar: '/assets/team/t3.jpg',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: '/assets/team/t4.jpg',
        link: '#',
    },
    {
        name: 'Rakesh Mondal',
        role: 'Accountant',
        avatar: '/assets/team/t1.jpg',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Designer',
        avatar: '/assets/team/t2.jpg',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section id="team" className="py-16 md:py-32 bg-background text-foreground">
            <div className="mx-auto max-w-5xl border-t border-neutral-800 px-6">
                <span className="text-sm font-semibold -ml-6 -mt-3.5 block w-max bg-background px-6 text-neutral-400">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0 text-neutral-400">
                        <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt={member.name}
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs text-neutral-500">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-neutral-500 inline-block text-sm transition duration-300 translate-y-0 opacity-100 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-primary inline-block text-sm tracking-wide transition-all duration-500 hover:underline translate-y-0 opacity-100 lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
