function copyTableToClipboard() {
            const table = document.getElementById('cssTable');
            const rows = table.querySelectorAll('tr');
            let text = '';

            rows.forEach(row => {
                const cells = row.querySelectorAll('th, td');
                const rowText = Array.from(cells)
                    .map(cell => cell.textContent.trim())
                    .join('\t');
                text += rowText + '\n';
            });

            navigator.clipboard.writeText(text).then(() => {
                alert('Table copied to clipboard! You can now paste it into Google Sheets.');
            }).catch(() => {
                alert('Failed to copy. Please try again.');
            });
        }