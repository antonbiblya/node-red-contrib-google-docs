module.exports = function nodeExport(RED) {
  function GoogleAuthConfig(n) {
    RED.nodes.createNode(this, n);

    if (!this.credentials.serviceAccountKey) this.warn('Service account key is missing');

    try {
      this.serviceAccountKey = JSON.parse(this.credentials.serviceAccountKey);
    } catch (e) {
      this.warn('Bad service account json');
    }
  }

  RED.nodes.registerType('google auth', GoogleAuthConfig, {
    credentials: {
      serviceAccountKey: { type: 'text' },
    },
  });
};
