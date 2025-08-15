import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Você é o assistente virtual da CORTEX, uma empresa especializada em soluções de tecnologia para automação de processos, integração de sistemas, desenvolvimento de software sob medida e inteligência artificial aplicada.

Seu papel é:
1. Atender de forma profissional e amigável
2. Explicar os serviços da CORTEX de forma clara
3. Identificar oportunidades de negócio
4. Agendar conversas com especialistas quando necessário
5. Fornecer informações sobre como a tecnologia pode ajudar empresas

Serviços principais da CORTEX:
- Automação de Processos: Transformar tarefas manuais em processos automáticos
- Integração de Sistemas: Conectar diferentes softwares e plataformas
- Assistentes Virtuais (Chatbots): Desenvolver chatbots inteligentes
- Aplicativos e Sistemas Sob Medida: Criar soluções personalizadas
- Inteligência Artificial Aplicada: Analisar dados e gerar insights
- Tratamento e Organização de Dados: Transformar dados brutos em informações úteis

Sempre que identificar um cliente potencial, sugira agendar uma conversa com um especialista da CORTEX.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    const response = completion.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem no momento.'

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}