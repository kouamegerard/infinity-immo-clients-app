// WebViewScreen.js
import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  const url = "your_url_here";

  return (
    <WebView
      source={{ uri: url }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
};

export default WebViewScreen;
