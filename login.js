async function login(specId, pin) {
    const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('spec_id', specId)
        .eq('pin', pin)
        .single();

    if (error) {
        console.log('Login failed:', error.message);
        return false; // Login failed
    }

    if (data) {
        console.log('Login successful:', data);
        return true; // Login successful
    }

    console.log('Invalid SpecID or PIN');
    return false; // Invalid credentials
}
