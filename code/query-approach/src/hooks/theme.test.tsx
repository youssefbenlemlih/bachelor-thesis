import { renderHook, waitFor } from "@testing-library/react";
import { useTheme, useToggleTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

/**
 * The tests below show the impossibility of testing react-query hooks when
 * using react-query as client side state management library by means of using
 * a global variable for the state.
 */
const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

afterEach(() => queryClient.clear());

test("A:Starts with light theme", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    await waitFor(() => expect(result.current).toBe("light"));
});

test("B:Toggles theme to dark", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    const { result: toggleResult } = renderHook(() => useToggleTheme(), {
        wrapper,
    });

    await toggleResult.current();

    await waitFor(() => expect(result.current).toBe("dark"));
});

test("C:Toggles theme back to light", async () => {
    const { result: beforeFirstToggle } = renderHook(() => useTheme(), {
        wrapper,
    });
    const { result: toggleResult } = renderHook(() => useToggleTheme(), {
        wrapper,
    });

    await waitFor(() => expect(beforeFirstToggle.current).toBe("light"));
    await toggleResult.current();
    const { result: afterFirstToggle } = renderHook(() => useTheme(), {
        wrapper,
    });
    await waitFor(() => expect(afterFirstToggle.current).toBe("dark"));
    await toggleResult.current();
    const { result: afterSecondToggle } = renderHook(() => useTheme(), {
        wrapper,
    });

    await waitFor(() => expect(afterSecondToggle.current).toBe("light"));
});
