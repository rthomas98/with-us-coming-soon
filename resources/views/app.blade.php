<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="{{ ($appearance ?? 'system') == 'dark' ? 'dark' : '' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: #FFFFFF;
            }

            html.dark {
                background-color: #222720;
            }
        </style>

        <title inertia>{{ config('app.name', 'With Us') }}</title>
        
        {{-- SEO Meta Tags --}}
        <meta name="description" content="WITH US - Where rejection creates obsession. Premium European sportswear meets LA culture. Join the first 500 for exclusive access.">
        <meta name="keywords" content="WITH US, European sportswear LA, premium French terry, LA sunset colorways, rejection created obsession, exclusive streetwear">
        <meta name="author" content="WITH US">
        
        {{-- Open Graph / Social Media Meta Tags --}}
        <meta property="og:title" content="WITH US - Rejection Created Obsession">
        <meta property="og:description" content="Premium European sportswear meets LA culture. Spring 2025. Join the first 500.">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url('/') }}">
        <meta property="og:image" content="{{ url('/images/og-image.jpg') }}">
        <meta property="og:site_name" content="WITH US">
        
        {{-- Twitter Card Meta Tags --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="WITH US - Rejection Created Obsession">
        <meta name="twitter:description" content="Premium European sportswear meets LA culture. Spring 2025. Join the first 500.">
        <meta name="twitter:image" content="{{ url('/images/og-image.jpg') }}">
        
        {{-- Canonical URL --}}
        <link rel="canonical" href="{{ url()->current() }}">

        {{-- Favicons --}}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
        
        {{-- Structured Data / Schema.org --}}
        <script type="application/ld+json">
        {
            "@@context": "https://schema.org",
            "@@type": "ComingSoon",
            "name": "WITH US",
            "description": "Premium European sportswear meets LA culture. Where rejection creates obsession.",
            "url": "{{ url('/') }}",
            "dateExpected": "2025-04",
            "brand": {
                "@@type": "Brand",
                "name": "WITH US",
                "slogan": "Rejection Created Obsession",
                "description": "Premium sportswear brand merging European design with LA street culture."
            },
            "offers": {
                "@@type": "Offer",
                "name": "Founding Member Access",
                "description": "First 500 members receive exclusive benefits including 48-hour early access, 25% lifetime discount, and private events.",
                "availability": "https://schema.org/PreOrder",
                "eligibleQuantity": {
                    "@@type": "QuantitativeValue",
                    "maxValue": 500
                }
            }
        }
        </script>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
