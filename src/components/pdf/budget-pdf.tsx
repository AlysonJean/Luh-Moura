import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#fff',
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderBottom : 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 20
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b06d8a', // Rosé Gold aproximado
  },
  clinicInfo: {
    fontSize: 10,
    textAlign: 'right',
    color: '#666',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 5,
  },
  content: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    borderTop: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
    fontSize: 8,
    color: '#999',
    textAlign: 'center',
  },
  signatureArea: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signatureLine: {
    borderTop: 1,
    borderTopColor: '#000',
    width: '45%',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 8,
  }
});

interface BudgetPDFProps {
  patientName: string;
  date: string;
  items: { description: string; value: string }[];
  total: string;
}

export const BudgetPDF = ({ patientName, date, items, total }: BudgetPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logo}>Luh Moura</Text>
        <View style={styles.clinicInfo}>
          <Text>Dra. Luh Moura - Estética Avançada</Text>
          <Text>WhatsApp: (31) 98553-7919</Text>
          <Text>Belo Horizonte, MG</Text>
        </View>
      </View>

      <Text style={styles.title}>Orçamento de Procedimentos</Text>

      <View style={styles.section}>
        <Text style={styles.content}>Paciente: {patientName}</Text>
        <Text style={styles.content}>Data: {date}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Procedimentos Propostos</Text>
        {items.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4, borderBottom: 0.5, borderBottomColor: '#eee' }}>
            <Text style={styles.content}>{item.description}</Text>
            <Text style={styles.content}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total: {total}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Observações</Text>
        <Text style={styles.content}>
          - Este orçamento tem validade de 15 dias.{"\n"}
          - Os valores podem sofrer alteração conforme a avaliação clínica final.{"\n"}
          - Agendamentos sujeitos a disponibilidade de estoque.
        </Text>
      </View>

      <View style={styles.signatureArea}>
        <View style={styles.signatureLine}>
          <Text>Dra. Luh Moura</Text>
        </View>
        <View style={styles.signatureLine}>
          <Text>{patientName}</Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Gerado automaticamente por Luh Moura Estética System © 2026
      </Text>
    </Page>
  </Document>
);
