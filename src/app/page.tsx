import {SanityDocument} from 'next-sanity'
import {sanityFetch} from '@/sanity/lib/fetch'
import {EXPERIENCE_QUERY} from '@/sanity/lib/queries'

export default async function Page() {
    const experience = await sanityFetch<SanityDocument[]>({
        query: EXPERIENCE_QUERY,
    })
    console.log(experience)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            Populate me with Sanity Content
            {experience.map((exp) => (
                <>
                    <p>{exp.name}</p>
                    <p>{exp.companyLink}</p>
                    <p>
                        {exp.startDate} - {exp.endDate}
                    </p>
                </>
            ))}
        </main>
    )
}
