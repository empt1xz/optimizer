use std::process::Command;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn prompt() {
  Command::new("cmd")
    .args(["/C", "start"])
    .spawn()
    .expect("Ocorreu um erro");
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, prompt])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
