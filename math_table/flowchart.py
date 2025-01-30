from graphviz import Digraph

def generate_flowchart():
    dot = Digraph('Flowchart', format='png')
    
    # Nodes
    dot.node('A', 'Start', shape='oval')
    dot.node('B', 'Input from', shape='parallelogram')
    dot.node('C', 'Input to', shape='parallelogram')
    dot.node('D', 'i = 1 to 12', shape='diamond')
    dot.node('E', 'j = from to to', shape='diamond')
    dot.node('F', 'Compute j * i', shape='rectangle')
    dot.node('G', 'Print j x i = result', shape='parallelogram')
    dot.node('H', 'New line', shape='rectangle')
    dot.node('I', 'End', shape='oval')
    
    # Edges
    dot.edge('A', 'B')
    dot.edge('B', 'C')
    dot.edge('C', 'D')
    dot.edge('D', 'E', label='Yes')
    dot.edge('E', 'F', label='Yes')
    dot.edge('F', 'G')
    dot.edge('G', 'E')
    dot.edge('E', 'H', label='No')
    dot.edge('H', 'D')
    dot.edge('D', 'I', label='No')
    
    # Render flowchart
    dot.render('flowchart', view=True)

if __name__ == "__main__":
    generate_flowchart()
