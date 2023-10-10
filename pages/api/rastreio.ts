/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { rastreioApi } from '@/libs/api';

interface RastreioRequest extends NextApiRequest {
  body: {
    cnpj: string;
    nro_nf: string;
  };
}

export interface TrackingData {
  success: boolean
  message: string
  header: Header
  tracking: Tracking[]
  stepperData?: Tracking[]
  activeStep?: number
}

export interface Header {
  remetente: string
  destinatario: string
}

export interface Tracking {
  data_hora: string
  dominio: string
  filial: string
  cidade: string
  ocorrencia: string
  descricao: string
  tipo: string
  data_hora_efetiva: string
  nome_recebedor: string
  nro_doc_recebedor: string
}

export default async function (req: RastreioRequest, res: NextApiResponse) {
  const { cnpj, nro_nf } = req.body;

  try {
    const getTrackingDataResponse = await rastreioApi.post<TrackingData>('/trackingdest', {
      cnpj,
      nro_nf,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const trackingData = getTrackingDataResponse.data;

    if (!trackingData.success) {
      return res.status(200).json(trackingData);
    }

    const trackingDataFiltered = trackingData.tracking.reduce((acc, curr) => {
      if (curr.ocorrencia.includes('(80)')) {
        acc[0] = {
          ocorrencia: "Pedido recebido pela transportadora",
          descricao: curr.descricao,
          data_hora: curr.data_hora,
          dominio: curr.dominio,
          filial: curr.filial,
          cidade: curr.cidade,
          tipo: curr.tipo,
          data_hora_efetiva: curr.data_hora_efetiva,
          nome_recebedor: curr.nome_recebedor,
          nro_doc_recebedor: curr.nro_doc_recebedor,
        }
      } else if (curr.ocorrencia.includes('(85)') || curr.ocorrencia.includes('(84)') || curr.ocorrencia.includes('(83)') || curr.ocorrencia.includes('(82)')) {
        acc[1] = {
          ocorrencia: curr.ocorrencia.includes('(85)') ? "Pedido saiu para entrega" : curr.ocorrencia.includes('(84)') ? "Pedido em trânsito" : curr.ocorrencia.includes('(83)') ? "Pedido em trânsito" : curr.ocorrencia.includes('(82)') ? "Pedido em trânsito" : "",
          descricao: curr.descricao,
          data_hora: curr.data_hora,
          dominio: curr.dominio,
          filial: curr.filial,
          cidade: curr.cidade,
          tipo: curr.tipo,
          data_hora_efetiva: curr.data_hora_efetiva,
          nome_recebedor: curr.nome_recebedor,
          nro_doc_recebedor: curr.nro_doc_recebedor,
        }
      } else if (curr.ocorrencia.includes('(01)')) {
        acc[2] = {
          ocorrencia: curr.ocorrencia.includes('(01)') ? "Pedido entregue" : "",
          descricao: curr.descricao,
          data_hora: curr.data_hora,
          dominio: curr.dominio,
          filial: curr.filial,
          cidade: curr.cidade,
          tipo: curr.tipo,
          data_hora_efetiva: curr.data_hora_efetiva,
          nome_recebedor: curr.nome_recebedor,
          nro_doc_recebedor: curr.nro_doc_recebedor,
        }
      }
      return acc;
    }, [] as Tracking[]);

    const newTrackingData = {
      ...trackingData,
      stepperData: trackingDataFiltered,
      activeStep: trackingDataFiltered.length,
    }

    return res.status(200).json(
      newTrackingData,
    );
  } catch (error) {
    return res.status(500).json({
      error: (error as Error).message || 'Unexpected error',
    });
  }
}
