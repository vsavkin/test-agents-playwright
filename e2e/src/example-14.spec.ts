import {test, expect} from '@playwright/test';

test('Example 14 - Page has title', async ({page, context}) => {
    await page.goto('/');

    await page.waitForTimeout(10000);

    expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('Example 14 - Page says open source', async ({page, context}) => {
    await page.goto('/');

    await page.waitForTimeout(10000);

    expect(await page.locator('#open-source').innerText()).toContain('open source');
});

test('Example 14 - Page shows Next Steps', async ({page, context}) => {
    await page.goto('/');

    await page.waitForTimeout(10000);

    expect(await page.locator('#next-steps').innerText()).toContain('Next steps');
});
