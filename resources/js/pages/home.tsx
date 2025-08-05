import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Layout354 } from '@/components/layout354';
import { Layout47 } from '@/components/layout47';
import { Layout254 } from '@/components/layout254';
import { Layout271 } from '@/components/layout271';
import { FoundersNote } from '@/components/founders-note';
import { Layout250 } from '@/components/layout250';
import { Layout356 } from '@/components/layout356';
import { Footer17 } from '@/components/footer17';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="relative">
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                <div className="pt-16 md:pt-18">
                    <Layout354 />
                    <Layout47 />
                    <Layout254 />
                    <Layout271 />
                    <FoundersNote />
                    <Layout250 />
                    <Layout356 />
                </div>
                <Footer17 />
            </div>
        </>
    );
}