<script>
    import { onMount } from "svelte";
    import { Hamburger } from "svelte-hamburgers";
    import { fade } from "svelte/transition";

    let loaded = false;
    let open = false;
    //console.log("hello")
    onMount(() => {
        loaded = true;
    });

    const urls = [
        { href: "/about", text: "About" },
        { href: "/upagri", text: "What is UPA?" },
        { href: "/upagri", text: "Exhibition Rooms" },
        { href: "/upagri", text: "Reading Rooms" },
        { href: "/upagri", text: "Contact" },
    ];
</script>

{#if loaded}
    <nav transition:fade class="fixed flex bg-eggshell w-full h-14 z-50">
        <div
            class="flex grow items-center justify-between border-b border-green mx-8 lg:mx-16"
        >
            <a
                class="font-pt text-xl md:text-2xl text-green hover:opacity-50 transition-opacity"
                href="/"
            >
                UPAgrI
            </a>
            <button class="block md:hidden">
                <Hamburger
                    type="squeeze"
                    --color="#2C5318"
                    --layer-width="24px"
                    --layer-height="2px"
                    --layer-spacing="5px"
                    bind:open
                />
            </button>

            <div
                class="hidden md:flex md:gap-x-4 lg:gap-x-12 text-green-dark font-azeret text-base md:text-sm lg:text-base"
            >
                {#each urls as item}
                    <a
                        class="hover:opacity-50 transition-opacity"
                        href={item.href}
                    >
                        {item.text}
                    </a>
                {/each}
            </div>
        </div>
        {#if open}
            <div
                transition:fade
                class="fixed w-full top-14 bg-eggshell text-green-dark font-azeret text-base p-8 z-50 shadow-gray/50 shadow-lg"
            >
                {#each urls as item}
                    <div class="py-2">
                        <a href={item.href}>
                            {item.text}
                        </a>
                    </div>
                {/each}
            </div>
        {/if}
    </nav>
{/if}
